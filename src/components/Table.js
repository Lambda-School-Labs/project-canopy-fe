import React,{useEffect} from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import {connect} from 'react-redux';
import {getThreatenedCounts,getThreatenedCountsByHabitat,getThreatenedCountsByCountry} from '../actions/index'

const TableSetup = (props) => {
  useEffect(()=>{
    props.getThreatenedCountsByHabitat()
    console.log(props.getThreatenedCountsByHabitat)
    console.log('////////////////////////////////////////////')
    props.getThreatenedCountsByCountry()
    console.log(props.getThreatenedCountsByCountry)
  },[])
  console.log(props.threatenedCounts);
    const columns = [
        {
          title: 'Country Name',
          dataIndex: 'CountryName',
          key: 'CountryName',
        },
        {
          title: 'Classes',
          dataIndex: 'class',
          key:'class',
        },
        {
          title: 'Total Threatend',
          dataIndex: 'totalThreatened',
          key:'totalThreatened',
        },
      ];
      
      const data = [
        {
          key: '1',
          CountryName: 'Congo',
          children: [
              {
                class: 'INSECTA',
                totalThreatened:  '178',
              },
              {
                class: "VERTEBRATE",
                totalThreatened: '167',
              },             
          ]
        },
        {
          key: '2',
          CountryName: 'Zimbabwe',
          children: [
              {
                class: 'APHROPODA',
                totalThreatened: '300',
              },

              {
                class: "VERTEBRATE",
                totalThreatened: '176',
              },
          ],
        },
      ];
    
      return(
        <div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 1}}
          bordered
          title={() => 'Total Threatend By Class'}
        />
        </div>
      )
      
}

const mapStateToProps=state=>{
  return {
    threatenedCounts:state.threatenedCounts,
    threatenedCountsByHabitat:state.threatenedCountsByHabitat,
    threatenedCountsByCountry:state.threatenedCountsByCountry
  }
}
export default connect(mapStateToProps,{getThreatenedCounts,getThreatenedCountsByHabitat,getThreatenedCountsByCountry})(TableSetup);
// POST ("country")

// returns

// [
// 	{
// 		countryName: "Congo",
// 		classes: [
// 			{
// 				class: "INSECTA",
// 				totalThreatened: 178
// 			}
// 			{
// 				class: "VERTEBRATE",
// 				totalThreatened: 167
				
// 			}
// 		]
// 	},
// 	{
// 		countryName: "Zimbabwe",
// 		classes: [
// 			{
// 				class: "APHROPODA",
// 				totalThreatened: 300
// 			}
// 			{
// 				class: "REPTILIA",
// 				totalThreatened: 176
// 			}
// 		]
// 	}
// ]