import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

const MyComboBox = ({ onSelect, people }) => {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);



  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.firstname.toLowerCase().includes(query.toLowerCase()) ||
          person.lastname.toLowerCase().includes(query.toLowerCase())
        );

        const handleChange = (person) => {
          setSelected(person);
          onSelect(person);
        };



  return (
    <div className="mx-auto h-screen w-52 pt-20">
      <Combobox value={selected} onChange={handleChange}>
        <div className="relative">
          <ComboboxInput
            className={clsx(
              'w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}
            displayValue={(person) => person ? `${person.firstname} ${person.lastname}` : ''}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'w-[var(--input-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible',
            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
          )}
        >
          {filteredPeople.map((person) => (
            <ComboboxOption
              key={person.id}
              value={person}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
            >
              <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
              <div className="text-sm/6 text-white">{`${person.firstname} ${person.lastname}`}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}
export default MyComboBox