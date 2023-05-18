import React from 'react'

import { BiSearch } from 'react-icons/bi'

import isDark from '../../services/ThemeDetector'

export default function SearchBar({ onChange }) {

    return <form className='p-5 '>
        <label className="mb-2  text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative dark:bg-gray-900">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <BiSearch color={isDark() ? '#fff' : '#000'} />
            </div>
            <input
                type="search" id="default-search" className="block w-full p-4 pl-10 text-sm hover:shadow-md focus:shadow-md
                     text-gray-900 border dark:text-gray-100 focus:outline-none border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500
                    focus:border-pink-500 dark:bg-zinc-950 dark:border-zinc-700"

                placeholder="Search projects"
                onChange={e => { onChange?.(e) }}
                required></input>
        </div>
    </form>

}