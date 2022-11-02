import { useEffect, useState } from "react"
import DateInput from "../Form/DateInput"
import DropdownInput from "../Form/DropdownInput"
import "../Form/Form.css"
import TextInput from "../Form/TextInput"

export default function ({ parentHandler }) {
    const [driverType, setDriverType] = useState(null)
    const [pickupDate, setPickupDate] = useState(null)
    const [pickupTime, setPickupTime] = useState(null)
    const [peopleAmount, setPeopleAmount] = useState(null)

    const validation = (arr) => {
        let isValid = true
        arr.forEach(element => {
            if (element == null || element == "" || element == false) isValid = false
        });
        return isValid
    }

    const clickHandler = (e) => {
        const value = {
            driverType: driverType,
            pickupDate: pickupDate,
            pickupTime: pickupTime,
            peopleAmount: peopleAmount
        }
        parentHandler(value)
    }

    return (
        <div id="car-form">
            <DropdownInput
                varName="driverType"
                label="Tipe Driver"
                placeholder="Pilih Tipe Driver"
                option={{
                    withDriver: "Dengan Sopir",
                    noDriver: "Tanpa Sopir (Lepas Kunci)"
                }}
                parentHandler={setDriverType}
            />

            <DateInput
                varName="pickupDate"
                label="Tanggal"
                placeholder="Pilih Tanggal"
                parentHandler={setPickupDate}
                value={pickupDate}
            />

            <DropdownInput
                type="time"
                varName="pickupTime"
                label="Waktu Jemput"
                placeholder="Pilih Waktu Jemput"
                option={{
                    "8.00": "8.00",
                    "9.00": "9.00",
                    "10.00": "10.00",
                    "11.00": "11.00",
                    "12.00": "12.00"
                }}
                parentHandler={setPickupTime}
            />

            <TextInput
                label="Jumlah Penumpang (optional)"
                placeholder="Jumlah Penumpang"
                varName="peopleAmount"
                icon="/img/icon_people.svg"
                parentHandler={setPeopleAmount}
            />

            <button
                id="search-car-btn"
                className={`btn btn-success ${(validation([driverType, pickupDate, pickupTime])) ? "" : "disabled"}`}
                onClick={clickHandler}
            >
                Cari Mobil
            </button>
        </div>
    )
}