import React from 'react'

import { BiSearch } from 'react-icons/bi'

export default function SearchBar({ onChange }) {

    return <form className='p-5'>
        <label className="mb-2  text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <BiSearch color='#region 000' />
            </div>
            <input
                type="search" id="default-search" className="block w-full p-4 pl-10 text-sm hover:shadow-md focus:shadow-md text-gray-900 border focus:outline-none border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500"
                placeholder="Search projects"
                onChange={e => { onChange?.(e) }}
                required></input>
        </div>
    </form>

}