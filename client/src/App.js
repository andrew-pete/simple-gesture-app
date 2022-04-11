import './App.css';
import React from 'react'
import FileDropzone from './components/FileDropzone';

export default function App() {
  return (
    <div className="app px-10">
      <h1 className="text-2xl text-green-700">
        A Simple Gesture
      </h1>
      <section className="flex justify-center items-center">
        <div className="block mt-4 w-2/3 content-center">
          <FileDropzone accepts=".csv" placeholder="Drag-and-drop your CSV file or click to upload"></FileDropzone>
        </div>
      </section>
    </div>
  )
}