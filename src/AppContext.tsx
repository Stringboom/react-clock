import { useEffect, useState } from 'react'
import App from './App'

function AppContext() {
	const date: Date = new Date()

	const [day, setDay] = useState<string>('--')
	const [month, setMonth] = useState<string>('--')
	const [year, setYear] = useState<string>('--')
	const [hour, setHour] = useState<string>('--')
	const [minute, setMinute] = useState<string>('--')
	const [second, setSecond] = useState<string>('--')
	const [tick, setTick] = useState<number>(0)

	function checkLeadingZero(num: number): string {
		return num.toString().length === 1 ? `0${num}` : num.toString()
	}

	useEffect(() => {
		setDay(checkLeadingZero(date.getDate()))
		setMonth(date.toLocaleString('default', { month: 'long' }))
		setYear(date.getFullYear().toString())
		setHour(checkLeadingZero(date.getHours()))
		setMinute(checkLeadingZero(date.getMinutes()))
		setSecond(checkLeadingZero(date.getSeconds()))
	}, [tick])

	setInterval(() => {
		setTick(tick + 1)
	}, 1000)


	return (<App day={day} month={month} year={year} hour={hour} minute={minute} second={second} />)
}

export default AppContext
