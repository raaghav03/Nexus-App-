import React, { useState } from 'react';
import { supabase } from '@/utils/supabase/client';

const TaskModal = ({ isOpen, onClose,onSubmit }) => {
    const [task_name, setTitle] = useState('');
    const [task_description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [due_date, setDueDate] = useState('');
    const [category, setCategory] = useState('');

    if (!isOpen) {
        return null;
    }
    const insertTask = async (task) => {
        const { error } = await supabase
            .from('yourtasks')
            .insert([task]);

        if (error) {
            console.error('Error inserting task:', error);
        } else {
            console.log('Task inserted successfully');
        }

    };
    const handleSubmit = () => {
        const task = {
            task_name,
            task_description,
            priority,
            due_date,
            category,
        };
        onSubmit(task); 
        onClose();
    };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                    New Task
                                </h3>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        value={task_name}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Task Name"
                                    />
                                    <textarea
                                        value={task_description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                                        placeholder="Task Description"
                                    />
                                    <select
                                        value={priority}
                                        onChange={(e) => setPriority(e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                                    >
                                        <option value="">Select Priority</option>
                                        <option value="high">High</option>
                                        <option value="medium">Medium</option>
                                        <option value="low">Low</option>
                                    </select>
                                    <input
                                        type="date"
                                        value={due_date}
                                        onChange={(e) => setDueDate(e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                                    />
                                    <select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                                    >
                                        <option value="">Select Category</option>
                                        <option value="backend">Backend</option>
                                        <option value="frontend">Frontend</option>
                                        <option value="marketing">Marketing</option>
                                        <option value="design">Design</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={onClose}
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;
