// import { useEffect } from "react";

// const getValue = () => 123;
// export const MyComponent = (props) => {
	// const date = new Date();

	// // Хук
	// useEffect(() => {
	// 	console.log(date)
	// }, []);

	// return (
	// 	<div>{String(date)}</div>
	// )

	// const value = 123;
	// const className = 'divElement';
// 	const tagName = 'div';
// 	return (
// 		<>
// 			<label>Значение</label>
// 			<div
// 				className={tagName + 'Element'}
// 				style={{width: '100px', marginTop: '20px'}}
// 			>
// 				{getValue()}
// 			</div>
// 		</>
// 	);

// }
import { useState } from 'react';
import styles from './MyComponent.module.css';
const getTimeFromDate = (date) => date.toISOString().substring(11, 19);
export const MyComp = () => {
	// Хук useState принимает как параметр начальное состояние (currentDate)
	// А возвращает фук всегда массив из двух элементов - актуальное значение состояния и функцию для установки нового значения состояния
	const [currentDate, setCurrentDate] = useState(new Date());
	// let currentDate = new Date();

	//Состояние компонента - данные, которые актуальны в определенный момент времени. При изменеии состояния, компонент сразу перерисовывается

	setTimeout(() => {
		// Аргументом передаем новое значение (вызов new Date вернет текущее время)
		setCurrentDate(new Date());
	}, 1000);
	const onClick = () => {
		console.log('123')
	}
	return (
		<>
	<div>
		{getTimeFromDate(currentDate)}
	</div>
	<button onClick={onClick}>Нажми</button>
	</>)
}

const numbers = [
	{ id: 'rty', num: '1'},
	{ id: 'uio', num: '2'},
	{ id: 'asd', num: '3'},
	{ id: 'fgh', num: '4'},
	{ id: 'jkl', num: '5'},
	{ id: 'zxc', num: '6'},
	{ id: 'vbn', num: '7'},
	{ id: 'qaz', num: '8'},
	{ id: 'wsx', num: '9'},
	{ id: 'qwe', num: '0'},
]
const operation = [
	{ id: 'sum', name: '+'},
	{ id: 'sub', name: '-'},
	{ id: 'result', name: '='},
	{ id: 'cancel', name: 'C'},
]
function sum(a, b) {
	return a + b;
}
function substract(a, b) {
	return a - b;
}

export const MyComponent = () => {
	const [firstOperand, setFirstOperand] = useState('0');
	const [lasttOperand, setLastOperand] = useState('');
	const [expression, setExpression] = useState('');
	const [result, setResult] = useState('result');
	const [isResult, setIsResult] = useState(true);

const expressionCalc = (e) => {
	console.log(e.target.innerHTML);
	if (e.target.innerHTML === '+' || e.target.innerHTML === '-') {
		setExpression((updateValue) => updateValue + e.target.innerHTML)
	}
	if (e.target.innerHTML === '=') {
		setIsResult()
		if (expression === '+') {
			setResult(() => sum(Number(firstOperand), Number(lasttOperand)))
		} else if (expression === '-') {
			setResult(() => substract(Number(firstOperand), Number(lasttOperand)))
		}
	}
	if (e.target.innerHTML === 'C') {
		setFirstOperand('0');
		setLastOperand('');
		setExpression('');
		setResult('result');
		setIsResult(true)
	}
	if (expression && result) {
		if (e.target.innerHTML === '+' || e.target.innerHTML === '-') {
			setExpression('');
			setLastOperand('');
			setResult('')
			setIsResult(true)
			setFirstOperand(() => result);
			setExpression((updateValue) => updateValue + e.target.innerHTML);
		}
	}
}
console.log({firstOperand})
console.log({expression})
console.log({lasttOperand})


	return (
		<div className={styles.calc}>
			<div className={styles.field}>
				<div className={styles.fieldCalc}>
					<div>{firstOperand}</div>
					<div>{expression}</div>
					<div>{lasttOperand}</div>
				</div>
				<div className={isResult ? styles.white : styles.yellow}>{result}</div>
			</div>
			<ul className={styles.buttonFunc}>
					{operation.map(({name}) => (
						<li><button className={styles.orange} onClick={expressionCalc}>{name}</button></li>
					))}
				</ul>
				<ul className={styles.ul}>
					{numbers.map(({num}) => (
						<li><button value={num} onClick={(e) => {
							if (firstOperand === '0') {
								setFirstOperand(e.target.value)
							} else if (!expression) {
								setFirstOperand((updateValue) => updateValue + num)
							}
							if (expression && firstOperand !== '0') {
								setLastOperand((updateValue2) => updateValue2 + num)
							}
						}}>{num}</button></li>
					))}
				</ul>
		</div>
	)
}
