import React from 'react';
import "./history.css";

function History() {
  return (
    <div>
    <header>
    <h1>Order History</h1>
</header>
<div className="HistoryC">
    <table>
        <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Total Amount</th>
            <th>View Details</th>
        </tr>
        <tr>
            <td>1</td>
            <td>2023-10-14</td>
            <td>$50.00</td>
            <td><a href="https://www.flipkart.com/motorola-edge-40-eclipse-black-256-gb/p/itmbe5b18bf1f229?pid=MOBGKHNBY3JZJHTB&lid=LSTMOBGKHNBY3JZJHTBAAOHOJ&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_1&otracker=browse&fm=organic&iid=81688e70-4cd0-4372-b148-05e3e1a6684e.MOBGKHNBY3JZJHTB.SEARCH&ppt=hp&ppn=homepage&ssid=ydgqvs4d8g0000001697381716356">View</a></td>
        </tr>
        <tr>
            <td>2</td>
            <td>2023-10-13</td>
            <td>$75.00</td>
            <td><a href="https://www.flipkart.com/motorola-edge-40-lunar-blue-256-gb/p/itm32e082b2d4213?pid=MOBGKHNBYGH5KHJ9&lid=LSTMOBGKHNBYGH5KHJ9JGONZB&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_3&otracker=browse&fm=organic&iid=81688e70-4cd0-4372-b148-05e3e1a6684e.MOBGKHNBYGH5KHJ9.SEARCH&ppt=hp&ppn=homepage&ssid=ydgqvs4d8g0000001697381716356">View</a></td>
        </tr>
        <tr>
            <td>3</td>
            <td>2023-10-12</td>
            <td>$30.00</td>
            <td><a href="#">View</a></td>
        </tr>
        
    </table>
</div>
    </div>
  )
}

export default History
