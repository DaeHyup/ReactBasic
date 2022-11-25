// 컴포넌트를 만들어나가는 함수 작성 방법

import './App.css';

function AppJSX() {
  const name = '대협';
  const list = ['우유', '딸기', '바나나', '요거트'];
  return (
	<div>
  		<h1 className="orange">{`Hello! ${name}`}</h1>
		<h2>Hello! {name}</h2>
		<ul>
			{
				list.map(item => <li>{item}</li>)
			}
		</ul>
		<img 
			// javascript object 형식으로 작성
			style={{width: '200px', height: '200px'}}
			src="https://images.unsplash.com/photo-1668809600737-d10c9599819b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" 
			alt="nature" 
		/>
	</div>
  );
}

export default AppJSX;
