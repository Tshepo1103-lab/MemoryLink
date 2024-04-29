"use client";

import { useHospitalActions, useHospitalState } from "@/providers/HospitalProvider";
import { SearchOutlined } from "@ant-design/icons";
import type { InputRef, TableColumnType, TableColumnsType } from "antd";
import { Button, ConfigProvider, Input, Space, Table } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { useStyles } from "./style/style";

interface DataType {
  name: string;
  email: string;
  contact: string;
  url: string;
}

type DataIndex = keyof DataType;



const HospitalComponent = () => {

  const {getallhospital} = useHospitalActions();
  const status = useHospitalState();
  const { styles } = useStyles();
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  useEffect(()=>{
    if(getallhospital)
      getallhospital()
  },[])
  console.log(status.GetAllHospital)
  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"],
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex,
  ): TableColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
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
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
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
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Contact",
      key: "contact",
      width: "30%",
    },
    {
      title: "Address",
      dataIndex: "url",
      key: "url",
      width: "1%",
      render: (text: string, record: DataType) => (
        <Link href={record.url} target="_Blank">
          <Button
            type="primary"
            style={{ backgroundColor: "#003366", alignItems: "center" }}
          >
            Directions
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <>
      <h1 className={styles.header}>Hospitals</h1>
      <p className={styles.paragraph}>
        MemoryLink supports the following hospitals
      </p>
      <div className={styles.recordsContainer}>
        <ConfigProvider
          theme={{
            components: {
              Table: {
                headerBg: "#003366",
                headerColor: "#fff",
                borderColor: "#003366",
                colorIcon: "#fff",
              },
            },
          }}
        >
          <Table
            columns={columns}
            dataSource={status.GetAllHospital}
            style={{ width: "100%", height: "50vh" }}
            pagination={{ pageSize: 5 }}
          />
        </ConfigProvider>
      </div>
    </>
  );
};

export default HospitalComponent;
