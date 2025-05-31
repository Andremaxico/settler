import React from 'react';
import { Post } from './Post';

type PropsType = {};

export type PostType = {
	username: string,
	id: number,
	avatarUrl: string,
	imageUrl: string,
	caption: string,
}

export const Posts: React.FC<PropsType> = ({}) => {
	const dummyData: PostType[] = [
		{
			avatarUrl: 'https://www.google.com/imgres?q=zelensky&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fb1%2FVolodymyr_Zelensky_Official_portrait_%2528cropped%2529.jpg&imgrefurl=https%3A%2F%2Fuk.m.wikipedia.org%2Fwiki%2F%25D0%25A4%25D0%25B0%25D0%25B9%25D0%25BB%3AVolodymyr_Zelensky_Official_portrait_(cropped).jpg&docid=w1zkbASBSWZr1M&tbnid=AOp3bRg3iCXmlM&vet=12ahUKEwiev-K1mc6NAxX_CRAIHelQHUsQM3oECEgQAA..i&w=2238&h=2985&hcb=2&ved=2ahUKEwiev-K1mc6NAxX_CRAIHelQHUsQM3oECEgQAA',
			id: 1,
			imageUrl: 'https://www.google.com/imgres?q=%D0%B3%D0%BE%D1%80%D0%B8&imgurl=https%3A%2F%2Fvarosh.com.ua%2Fwp-content%2Fuploads%2F2023%2F08%2F1690893829.jpg&imgrefurl=https%3A%2F%2Fvarosh.com.ua%2Fmiscya%2Fgory-to-lyubov-hto-i-navishho-vodyt-pishi-grupy-turystiv-na-girski-vershyny%2F&docid=JaIs7sj3czGziM&tbnid=ycw7ZhKBuhRbPM&vet=12ahUKEwj9sfqImc6NAxVCExAIHUbAKtgQM3oECC8QAA..i&w=1298&h=503&hcb=2&ved=2ahUKEwj9sfqImc6NAxVCExAIHUbAKtgQM3oECC8QAA',
			username: 'Andremaxico',
			caption: 'Love yall'
		}, 
		{
			avatarUrl: 'https://www.google.com/imgres?q=%D0%BE%D0%BB%D0%B5%D0%BD%D0%B0%20%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B0&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F16%2FOlena_Zelenska_2021.jpg%2F250px-Olena_Zelenska_2021.jpg&imgrefurl=https%3A%2F%2Fuk.wikipedia.org%2Fwiki%2F%25D0%2597%25D0%25B5%25D0%25BB%25D0%25B5%25D0%25BD%25D1%2581%25D1%258C%25D0%25BA%25D0%25B0_%25D0%259E%25D0%25BB%25D0%25B5%25D0%25BD%25D0%25B0_%25D0%2592%25D0%25BE%25D0%25BB%25D0%25BE%25D0%25B4%25D0%25B8%25D0%25BC%25D0%25B8%25D1%2580%25D1%2596%25D0%25B2%25D0%25BD%25D0%25B0&docid=fmUawaOhMWb3YM&tbnid=Xp8noAGee-cCRM&vet=12ahUKEwjhtOe-mc6NAxWMPxAIHUvoCT0QM3oECBsQAA..i&w=250&h=375&hcb=2&ved=2ahUKEwjhtOe-mc6NAxWMPxAIHUvoCT0QM3oECBsQAA',
			id: 2,
			imageUrl: 'https://www.google.com/imgres?q=%D0%B3%D0%BE%D1%80%D0%B8&imgurl=https%3A%2F%2Fvarosh.com.ua%2Fwp-content%2Fuploads%2F2023%2F08%2F1690893829.jpg&imgrefurl=https%3A%2F%2Fvarosh.com.ua%2Fmiscya%2Fgory-to-lyubov-hto-i-navishho-vodyt-pishi-grupy-turystiv-na-girski-vershyny%2F&docid=JaIs7sj3czGziM&tbnid=ycw7ZhKBuhRbPM&vet=12ahUKEwj9sfqImc6NAxVCExAIHUbAKtgQM3oECC8QAA..i&w=1298&h=503&hcb=2&ved=2ahUKEwj9sfqImc6NAxVCExAIHUbAKtgQM3oECC8QAA',
			username: 'Olia Os.',
			caption: 'Love'
		}
	]

	if (dummyData.length == 0) {
		return <p>No results</p>
	}

	return (
		<div>
			{dummyData.map(data => <Post data={data} key={data.id} />)}
		</div>
	)
}
