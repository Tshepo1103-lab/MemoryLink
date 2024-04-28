import React from 'react';
import { useStyles } from './style/style';
import { Flex, Table } from 'antd';

const PatientDetailsPage = () => {

  const {styles}=useStyles();
  interface DataType {
    key: string;
    gender: string;
    name: string;
    address: string;
    ward: string;
    hospital: string;
    age: string;
    image: string;
    EyeColor: string;
    Build: string;
    HairColor: string;
    SkinTone: string;
    DistinguishingFeature: string;
    MoreDetails: string;
    dateAdmitted: string;
  }

  const dataSource: DataType[]= [
    {
        key: '1',
        gender:'Male',
        name: 'John',
        address: 'New York',
        ward:'4',
        hospital: 'Bara',
        age: '30-35',
        image: '/assets/images/Patient2.png', 
        EyeColor:'brown',
        Build:'slender',
        HairColor:'Black',
        SkinTone:'Brown',
        DistinguishingFeature:'Tattoo on the left wrist',
        MoreDetails:'None',
        dateAdmitted:'01-01-2023'
    },
    
  ];
  
  const columns = [
      {
        title: 'Hospital',
        dataIndex: 'hospital',
        key: 'hospital',
      },
      {
        title: 'Ward',
        dataIndex: 'ward',
        key: 'ward',
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
      },
      {
        title: 'Build',
        dataIndex: 'Build',
        key: 'Build',
      },
   
      {
        title: 'Age-Range',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Eye Color',
        dataIndex: 'EyeColor',
        key: 'EyeColor',
      },
      {
        title: 'Hair Color',
        dataIndex: 'HairColor',
        key: 'HairColor',
      },
      {
        title: 'Skin Tone',
        dataIndex: 'SkinTone',
        key: 'SkinTone',
      },
      {
        title: 'Distinguishing Feature',
        dataIndex: 'DistinguishingFeature',
        key: 'DistinguishingFeature',
      },
      {
        title: 'More Details',
        dataIndex: 'MoreDetails',
        key: 'MoreDetails',
      },
      {
        title: 'Date Admitted',
        dataIndex: 'dateAdmitted',
        key: 'dateAdmitted',
      },
  ];
  
  const transposedDataSource = columns.map(column => {
    return {
      key: column.key,
      attribute: column.title,
      'Row 1': dataSource[0][column.dataIndex as keyof DataType],
     
    };
  });
  const transposedColumns = [
    {
      title: 'Attribute',
      dataIndex: 'attribute',
      key: 'attribute',
      width: "120px",
    },
    {
      title: 'Details',
      dataIndex: 'Row 1',
      key: 'Row 1',
      width: "400px",
    },
   
  ];
  return (
    <div className={styles.main}>
      <h1 className={styles.header}>Patient Details</h1>
      <div className={styles.mother}>
        <div className={styles.child}>
                <img src={dataSource[0].image} alt={dataSource[0].DistinguishingFeature} style={{ width: '50%', height: '50vh', marginLeft:'20px'}} />
                <div style={{ display: 'flex', flexDirection: 'column', width:'90%' }}>
                    <Table
                        style={{ width: "100%",height:"50vh",marginLeft:'20px', display:'flex',
                        alignItems:'center'}}
                        dataSource={transposedDataSource}
                        columns={transposedColumns}
                        bordered
                        pagination={{ pageSize: 4 }}
                    />
                </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetailsPage;
