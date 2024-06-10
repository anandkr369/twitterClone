import React from 'react';

const UpgradeToPremium = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg">
                <div className="text-center py-6">
                    <h1 className="text-3xl font-bold">Upgrade to Premium</h1>
                    <p className="mt-2 text-gray-600">Enjoy an enhanced experience, exclusive creator tools, top-tier verification and security.</p>
                    <a href="#" className="text-blue-500 underline mt-2 block">(For organizations, sign up here)</a>
                </div>
                <div className="flex justify-center mt-6">
                    <button className="mx-4 py-2 px-4 border border-blue-500 text-blue-500 rounded-lg">Annual</button>
                    <button className="mx-4 py-2 px-4 border border-blue-500 text-blue-500 rounded-lg">Monthly</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 px-4">
                    <div className="p-6 border rounded-lg">
                        <h2 className="text-2xl font-bold">Basic</h2>
                        <p className="mt-2 text-xl font-semibold">₹215.87 / month</p>
                        <p className="text-gray-500">Billed annually</p>
                        <p className="text-green-500 mt-1">SAVE 11%</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Subscribe</button>
                        <ul className="mt-4 text-gray-600 space-y-2">
                            <li>Small reply boost</li>
                            <li>Encrypted direct messages</li>
                            <li>Bookmark folders</li>
                            <li>Highlights tab</li>
                            <li>Edit post</li>
                            <li>Post longer videos</li>
                            <li>Longer posts</li>
                        </ul>
                    </div>
                    <div className="p-6 border rounded-lg">
                        <h2 className="text-2xl font-bold">Premium</h2>
                        <p className="mt-2 text-xl font-semibold">₹566.67 / month</p>
                        <p className="text-gray-500">Billed annually</p>
                        <p className="text-green-500 mt-1">SAVE 12%</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Subscribe</button>
                        <ul className="mt-4 text-gray-600 space-y-2">
                            <li>Everything in Basic, and</li>
                            <li>Half Ads in For You and Following</li>
                            <li>Larger reply boost</li>
                            <li>Get paid to post</li>
                            <li>Checkmark</li>
                            <li>Grok Early Access</li>
                            <li>X Pro, Analytics, Media Studio</li>
                            <li>Creator Subscriptions</li>
                        </ul>
                    </div>
                    <div className="p-6 border rounded-lg">
                        <h2 className="text-2xl font-bold">Premium+</h2>
                        <p className="mt-2 text-xl font-semibold">₹1,133.33 / month</p>
                        <p className="text-gray-500">Billed annually</p>
                        <p className="text-green-500 mt-1">SAVE 12%</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Subscribe</button>
                        <ul className="mt-4 text-gray-600 space-y-2">
                            <li>Everything in Premium, and</li>
                            <li>No Ads in For You and Following</li>
                            <li>Largest reply boost</li>
                            <li>Write Articles</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpgradeToPremium;
