import { Table } from "antd";
import React from "react";

const LeaderBoard = () => {


    const dataSource = [
        {
          key: '1',
          leader: 'Mike',
          balance: 32,
          address: 10,
        },
        {
          key: '2',
          leader: 'John',
          balance: 42,
          address: 10,
        },
      ];
      
      const columns = [
        {
          title: 'Laeader',
          dataIndex: 'leader',
          key: 'leader',
        },
        {
          title: 'Balance',
          dataIndex: 'balance',
          key: 'balance',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];


      return (
        <Table dataSource={dataSource} columns={columns} />
      );
}

export default LeaderBoard;