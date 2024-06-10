// AIzaSyD-QflkxemKfAA8nOQj-x-3Kg7QUkHvvUE

import React, { useState } from 'react';
import axios from 'axios';

const TwitterGrokClone = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [copied, setCopied] = useState(false);

    const user = {
        name: 'John Doe',
        username: 'johndoe',
        profileImage: 'https://via.placeholder.com/50' // Replace with actual user profile image URL
    };

    const grok = {
        name: 'Grok',
        username: 'grok',
        profileImage: 'https://via.placeholder.com/50' // Replace with actual Grok profile image URL
    };

    async function generateAnswer() {
        const response = await axios({
            url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyD-QflkxemKfAA8nOQj-x-3Kg7QUkHvvUE`,
            method: "POST",
            data: {
                contents: [
                    {
                        parts: [{ text: question }]
                    }
                ]
            }
        });

        setQuestion("");
        const generatedAnswer = response.data.candidates[0].content.parts[0].text;
        setAnswer(generatedAnswer);
        setCopied(false);
    }

    const copyGeneratedAnswer = () => {
        navigator.clipboard.writeText(answer)
            .then(() => setCopied(true))
            .catch((error) => console.error('Error copying text: ', error));
    }

    return (
        <div className="min-h-screen bg-gray-100 py-4 px-4 lg:px-0">
            <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg">
                <div className="p-4">
                    <textarea
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="What's happening?"
                    ></textarea>
                    <div className="flex justify-end mt-2">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={generateAnswer}
                        >
                            grok
                        </button>
                    </div>
                </div>
                {question && (
                    <div className="border-t border-gray-200">
                        <div className="flex p-4">
                            <img src={user.profileImage} alt="User Profile" className="w-12 h-12 rounded-full" />
                            <div className="ml-4">
                                <div className="flex items-center">
                                    <span className="font-bold">{user.name}</span>
                                    <span className="text-gray-500 ml-2">@{user.username}</span>
                                </div>
                                <div className="mt-2">{question}</div>
                            </div>
                        </div>
                    </div>
                )}
                {answer && (
                    <div className="border-t border-gray-200">
                        <div className="flex p-4">
                            <img src={grok.profileImage} alt="Grok Profile" className="w-12 h-12 rounded-full" />
                            <div className="ml-4">
                                <div className="flex items-center">
                                    <span className="font-bold">{grok.name}</span>
                                    <span className="text-gray-500 ml-2">@{grok.username}</span>
                                </div>
                                <div className="mt-2">{answer}</div>
                            </div>
                        </div>
                        <div className="flex justify-end p-4">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={copyGeneratedAnswer}
                            >
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TwitterGrokClone;
