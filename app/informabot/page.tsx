"use client";

import { Container, LoadingDots } from '@/components';
import { usePrompt, useSelect } from '@/hooks';
import { API } from '@/utils/axios-instance';
import { MaterialReactTable } from 'material-react-table';
import React, { useEffect, useMemo, useState } from 'react'

//example data type
type Person = {
    name: {
      firstName: string;
      lastName: string;
    };
    address: string;
    city: string;
    state: string;
  };

  const data: Person[] = [
    {
      name: {
        firstName: 'John',
        lastName: 'Doe',
      },
      address: '261 Erdman Ford',
      city: 'East Daphne',
      state: 'Kentucky',
    },
    {
      name: {
        firstName: 'Jane',
        lastName: 'Doe',
      },
      address: '769 Dominic Grove',
      city: 'Columbus',
      state: 'Ohio',
    },
    {
      name: {
        firstName: 'Joe',
        lastName: 'Doe',
      },
      address: '566 Brakus Inlet',
      city: 'South Linda',
      state: 'West Virginia',
    },
    {
      name: {
        firstName: 'Kevin',
        lastName: 'Vandy',
      },
      address: '722 Emie Stream',
      city: 'Lincoln',
      state: 'Nebraska',
    },
    {
      name: {
        firstName: 'Joshua',
        lastName: 'Rolluffs',
      },
      address: '32188 Larkin Turnpike',
      city: 'Omaha',
      state: 'Nebraska',
    },
  ];

const InformaBot = () => {

      const [selectedOption, setSelectedOption] = useState("");
      const [options, setOptions] = useState([]);
      const [columnData, setColumnData] = useState([]);
      const [rowData, setRowData] = useState([]);

      const [inputText, setInputText] = useState('');
      const [query, setQuery] = useState('');
      const [answer, setAnswer] = useState('');
      const [loader, setLoader] = useState(false);
      const [chats, setChats] = useState([]);
      const [ showPrompt, setShowPrompt ] = React.useState(false);

      const columns = useMemo(() => columnData, []);

      useEffect(() => {

        const getAllOptions = async () => {

          const res = await API.get('/display_csv_files');
          setOptions(res.data.files);       

        }

        getAllOptions();

      }, []);

      const handleOptions = (e:any) => {

        setSelectedOption(e.target.value);

      }

      const handleFetch = async () => {

        const reqBody = { "csv_file": selectedOption };

        const res = await API.post('/get_csv_files', reqBody);
        const columns: any = Object.keys(res.data[0]);

        const columnsList = columns.map((v:any) => ({
          accessorKey: v,
          header: v
        }));

        setColumnData(columnsList)

        setRowData(res.data);

      }

      const handleInput = (e: any) => {

        setInputText(e.target.value);

      }

      const handleClick = async () => {

        const reqBody = { query: inputText }

        setLoader(true);
        setQuery(inputText);
        setInputText('');

        const res = await API.post('/query_csv', reqBody);
        setAnswer(res.data.response);
        setLoader(false);

        
      }

      const handleSubmit = (e: any) => {

        if (e.key === "Enter") {

          handleClick();

        }

      }

      

  return (
    <Container activeId={2}>

        <div className='m-4 overflow-auto max-h-[95%]'>

          <div className='flex gap-2 justify-between my-4'>

            <select disabled={options.length === 0} value={selectedOption} onChange={handleOptions} className={'border border-[lightgray] rounded-md p-3 w-full outline-none bg-white'}>

              <option>Select a document</option>
              
              {options.map(((value, index) => (
                <option key={index}>{value}</option>
              )))}

            </select>

            <button className='bg-blue-500 rounded-md p-2 text-white w-32 hover:bg-blue-700' onClick={handleFetch}>Fetch</button>

          </div>


          <MaterialReactTable columns={columnData} data={rowData}  />

          <div className='my-4'>

            <div className='border rounded-md p-3 bg-white'>

                <div className='overflow-y-auto h-40'>

                  <div className='my-2'>{query}</div>

                  {loader ? <LoadingDots /> : <div className='bg-gray-100 p-2 rounded-md'>{answer}</div>}
                  
                </div>

            </div>
            
            <div className='flex justify-between items-center bg-white p-3 border rounded-md my-4'>

              <div className='w-full'>
                <input type='text' value={inputText} onKeyDown={handleSubmit} onChange={handleInput} placeholder='Enter your questions here...' className='w-full outline-none' />
              </div>

              <div onClick={handleClick}>
                <button className='bg-blue-500 hover:bg-blue-800 text-white p-2 rounded-md w-20'>Send</button>
              </div>

            </div>

          </div>

        </div>

    </Container>
  )

}

export default InformaBot