# React 0
## Introduction
This is my very first React project. Idea is from TopCoder challenge. 
Link to my work: https://github.com/maingockien01/React0/settings/pages

## Notes:
What I have learned through this project?

### Data in React
I quite like the way React deals with data. Data is very sensitive to unintentional changes, which can affect the whole system. React deals well with that by requires each components manages itself data through state. 
Props and State are very interesting interaction. The special of data management of react is props is read-only which the child component can not change the given data directly. The data is changed only by "the owner", which prevents wrong/unexpected changes by other components. 
The design pattern reminds me of Hollywood quote in CS: "Dont call me, I'll call you". Here, we have: "Dont do any stupid with data, tell me, then I'll change my data". 
In order to change data, we need some ways/means to tell the "owner" component to change its data. And the compoenent is just some functions/methods passed through props. 

### Components in React
I did not have any experience with Web development before. In fact, I found it difficult to code the front end. With the thinking of website components, I find it easier to break a website down to componenets abd build it up from small components to one component.
 
### React development process
I still havent had specific any process of developing React app. 
When I did it , I start from the big app then create a rough html design then break down html code into components. Then, I start with smaller components. After all, I added data movenement through the app. Finally, I use css to make my website look better. 
My developement process is pretty complicated when I add data movement from parent components to child components. The reason is I dont know what kind of data I need ahead. And what data I need to pass and what data I need to manage. Data is kind of the central model for the react. 
When I create my apps, I had to think about which components need to manage some data or just presentation of data. For only presenting components, I neednot to use class React Component to create a component. Instead, a simple class/function would do and keep my code simple and faster to deploy/load. 

### Thinking in React
I realized some things whille writing this down.
Data is like the center of React design. What the component need from props and what it will change/manage - state.
Lifecyle is also something else I need to have a deep look into. 
Components breakdown is a thing as well. If we can separate components into 2 parts: logic (controling data) and presentation (html+css). I can reuse the presentation parts for different purpose and I could easily change the presentation as well. 

