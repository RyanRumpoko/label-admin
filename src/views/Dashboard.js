import React from "react";
import CardType1 from "../components/CardType1";
import CardType2 from "../components/CardType2";
import CardType3 from "../components/CardType3";
import CardType4 from "../components/CardType4";

const Dashboard = () => {
  return (
    <>
      <div className="row justify-content-center my-4 px-4">
        <div className="col-8">
          <CardType1
            label="Good Morning, LabelAdmin"
            date="Thursday, 23 February 2023"
          />
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-12 mb-4">
              <CardType2
                name="New Player Registered"
                date="Yesterday, 31.987M"
                total="12.921"
                color="bg-success"
              />
            </div>
            <div className="col-12">
              <CardType2
                name="Active Users"
                date="Yesterday, 31.987M"
                total="3.921"
                color="bg-danger"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mb-4 px-4">
        <div className="col-6">
          <div className="row mb-4">
            <div className="col-6">
              <CardType2
                name="New Player Register"
                date="Yesterday, 31.987M"
                total="12.921"
                color="bg-warning"
              />
            </div>
            <div className="col-6">
              <CardType2
                name="Active User"
                date="Yesterday, 31.987M"
                total="3.921"
                color="bg-info"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <CardType3 label="Total Deposit" />
            </div>
            <div className="col-6">
              <CardType3 label="Total Withdraw" />
            </div>
          </div>
        </div>
        <div className="col-3">
          <CardType4
            name="Livegame"
            icon="fas fa-star-of-life text-primary"
            label1="Total TO"
            label2="Total Win"
            label3="Total Profit"
            total1="821.000.823."
            total2="1.623.888.023."
            total3="2.992.129.000"
            inc1="112"
            inc2="119"
            inc3="120"
          />
        </div>
        <div className="col-3">
          <CardType4
            name="Lottery"
            icon="fas fa-life-ring text-primary"
            label1="Total TO"
            label2="Total Paid"
            label3="Total Win"
            total1="854.485.000"
            total2="854.485.000"
            total3="854.485.000"
            inc1="000"
            inc2="223"
            inc3="999"
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
