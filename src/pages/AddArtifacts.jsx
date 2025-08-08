import { Target } from 'lucide-react';
import React from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddArtifacts = () => {

    const artifactTypes = [
        'Tools',
        'Weapons',
        'Documents',
        'Writings',
        'Pottery',
        'Jewelry',
        'Sculptures',
        'Coins',
        'Textiles',
        'Religious Items',
        'Other'
    ];

    const { user } = useAuth();


    const handleArtifacts = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const artifact = Object.fromEntries(formData.entries());

        const finalArtifact = {
            ...artifact,
            likeCount: 0
        }

        console.log(finalArtifact)
        axios.post('https://historical-artifact-server.vercel.app/artifacts', artifact)
            .then(res => {
                const data = res.data;
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Artifact Added Successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }

            }).catch(error => {
                console.log(error)
            })

    }


    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
            <title>Historical Artifacts | Add Artifacts</title>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold text-amber-900 mb-4 tracking-tight">
                        Add New Artifact
                    </h2>
                    <p className="text-xl text-amber-700 mb-6">
                        Contribute to our collection by adding a historical artifact
                    </p>
                    <div className="w-32 border border-amber-900  mx-auto rounded-full"></div>
                </div>

                {/* Form */}
                <form onSubmit={handleArtifacts} className="space-y-8">
                    {/* Basic Information Section */}
                    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-amber-200 hover:shadow-3xl transition-shadow duration-300">
                        <h3 className="text-3xl font-bold text-amber-900 mb-8 flex items-center">
                            <span className="w-8 h-8 bg-amber-900 text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                            Basic Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-amber-900 mb-2">
                                    Artifact Name *
                                </label>
                                <input
                                    type="text"
                                    name="artifactName"
                                    required
                                    className="w-full outline-none px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 bg-amber-50 hover:bg-white"
                                    placeholder="Enter the name of the artifact"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-amber-900 mb-2">
                                    Artifact Image URL *
                                </label>
                                <input
                                    type="url"
                                    name="artifactImage"
                                    required
                                    className="w-full px-4 py-3 outline-none border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 bg-amber-50 hover:bg-white"
                                    placeholder="https://example.com/image.jpg"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-amber-900 mb-2">
                                    Artifact Type *
                                </label>
                                <select
                                    name="artifactType"
                                    required
                                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 bg-amber-50 hover:bg-white"
                                >
                                    <option value="">Select artifact type</option>
                                    {artifactTypes.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-amber-900 mb-2">
                                    Created At *
                                </label>
                                <input
                                    type="text"
                                    name="createdAt"
                                    required
                                    className="w-full px-4 py-3 outline-none border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 bg-amber-50 hover:bg-white"
                                    placeholder="e.g., 100 BC, 1500 AD"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-amber-900 mb-2">
                                    Short Description *
                                </label>
                                <textarea
                                    name="shortDescription"
                                    required
                                    rows={3}
                                    className="w-full px-4 py-3 outline-none border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 bg-amber-50 hover:bg-white resize-none"
                                    placeholder="Brief description of the artifact"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Historical Context Section */}
                    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-amber-200 hover:shadow-3xl transition-shadow duration-300">
                        <h3 className="text-3xl font-bold text-amber-900 mb-8 flex items-center">
                            <span className="w-8 h-8 bg-amber-900 text-white rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                            Historical Context
                        </h3>

                        <div>
                            <label className="block text-sm font-semibold text-amber-900 mb-2">
                                Historical Context *
                            </label>
                            <textarea
                                name="historicalContext"
                                required
                                rows={5}
                                className="w-full px-4 py-3 outline-none border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 bg-amber-50 hover:bg-white resize-none"
                                placeholder="Provide detailed historical context, significance, and background information about this artifact"
                            />
                        </div>
                    </div>

                    {/* Discovery Information Section */}
                    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-amber-200 hover:shadow-3xl transition-shadow duration-300">
                        <h3 className="text-3xl font-bold text-amber-900 mb-8 flex items-center">
                            <span className="w-8 h-8 bg-amber-900 text-white rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                            Discovery Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-amber-900 mb-2">
                                    Discovered At *
                                </label>
                                <input
                                    type="text"
                                    name="discoveredAt"
                                    required
                                    className="w-full px-4 py-3 outline-none border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 bg-amber-50 hover:bg-white"
                                    placeholder="e.g., 1799, 1922"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-amber-900 mb-2">
                                    Discovered By *
                                </label>
                                <input
                                    type="text"
                                    name="discoveredBy"
                                    required
                                    className="w-full px-4 py-3 outline-none border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 bg-amber-50 hover:bg-white"
                                    placeholder="Name of discoverer or archaeological team"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-amber-900 mb-2">
                                    Present Location *
                                </label>
                                <input
                                    type="text"
                                    name="presentLocation"
                                    required
                                    className="w-full px-4 py-3 outline-none border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 bg-amber-50 hover:bg-white"
                                    placeholder="Museum, collection, or current location"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Contributor Information Section */}
                    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-amber-200 hover:shadow-3xl transition-shadow duration-300">
                        <h3 className="text-3xl font-bold text-amber-900 mb-8 flex items-center">
                            <span className="w-8 h-8 bg-amber-900 text-white rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                            Contributor Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-amber-900 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="adderName"
                                    value={user.displayName}
                                    readOnly
                                    className="w-full px-4 py-3 outline-none border-2 border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-amber-900 mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="adderEmail"
                                    value={user.email}
                                    readOnly
                                    className="w-full px-4 py-3 outline-none border-2 border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-8">
                        <button
                            className="px-12 py-4 bg-gradient-to-r from-amber-900 to-orange-900 text-white text-lg font-bold rounded-xl shadow-2xl hover:from-amber-800 hover:to-orange-800 transform hover:scale-105 transition-all duration-300 hover:shadow-3xl"
                        >
                            🏺 Add Artifact
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default AddArtifacts;