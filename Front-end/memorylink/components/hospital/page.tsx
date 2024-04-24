'use client'

import { SearchOutlined } from '@ant-design/icons';
import type { InputRef, TableColumnType, TableColumnsType } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { useStyles } from './style/style';

interface DataType {
  key: string;
  name: string;
  age: string;
  address: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: '1',
    name: 'Pretoria',
    age: '011 098 8765',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Kwamhlanga',
    age: '011 098 8765',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Steve Biko',
    age: '011 098 8765',
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Tshwane ',
    age: '011 098 8765',
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'Steve Biko',
    age: '011 098 8765',
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '6',
    name: 'Tshwane ',
    age: '011 098 8765',
    address: 'London No. 2 Lake Park',
  },
  {
    key: '7',
    name: 'Steve Biko',
    age: '011 098 8765',
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '8',
    name: 'Tshwane ',
    age: '011 098 8765',
    address: 'London No. 2 Lake Park',
  },
];

const HospitalComponent= () => {

  const {styles}=useStyles();
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps['confirm'],
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns: TableColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Contact',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
     
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: '20%',
      
    },
  ];

  return (
    <>
    <h1 className={styles.header}>Hospitals</h1>
      <p className={styles.paragraph}>MemoryLink supports the following hospitals</p>
      <div className={styles.recordsContainer}>
      <Table columns={columns} dataSource={data} style={{ width: '100%', 
      }}  pagination={{ pageSize: 6 }}/>
    </div>
    </>
  )
};

export default HospitalComponent;