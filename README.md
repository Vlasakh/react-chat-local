## Links
- https://github.com/knicklabs/lorem-ipsum.js

## Task
Please develop a simple web chat. 
- Before entering the chat, the user is prompted to enter his name, which is further used to identify his messages.
- Implement saving messages in memory (on the local machine, in localstorage or somewhere else, without a backend).
- Each new browser tab is a new chat user. Chat history can be updated after reloading the page.
- Implement functionality for sending messages to chat.
- Implement functionality for show message history, and load more messages when scroll chats to the top. (page size = 25)
- Please write tests on features where they are needed for you think.

## Test cases
- Покрыть тестами всю логику кейсов редьюсера
- Покрыть тестами всю логику сложных экшенов. Покрывать экшен типа fetchInitialData безсмысленно, там ломать нечего
- Отрендерить через `react testing library` Login.js 
  - Проверить, что на `hasDemoData` он показывает кнопку форму входа, а на false кнопку "Load demo data"
  - Проверить, что при пустом поле имени кнопка входа блокирована
  - Проверям вызов соотв. экшенов на хендлерах handleResetData, handleStartClick
  - Мокаем `useHistory` и проверяем, что при появлении id пользователя - в на history вызывается `push` метод
- Отрендерить через `react testing library` MainPage.js
  - Проверяем имя пользователя в шапке чата
  - Проверяем вывод сообщений в разных вариациях, манипулируя входными данными: свои сообщения, сообщения других пользователей, новые сообщения
  - Проверить логику скрола чата вниз по входящим данным: пустые данные, данные загрузились
  - Проверить, что блокируется кнопка отправки сообщений если сообщение пустое
  - Проверить вызов `fetchSendMsg` экшена с правильными данными, при отправке сообщения
  - Создать в системе искусственно событие `storage` и проверить вызов экшена `fetchNewMessages`
  - Проверить однократный вызов `fetchMessages` при загрузке компонента
  - Проверить, что после отправки сообщения вызывается callback `successCallback` и сбрасывается текст сообщения и поле фокуса попадает в поле ввода
