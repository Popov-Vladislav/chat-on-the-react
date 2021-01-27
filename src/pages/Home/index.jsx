import React from 'react';
import { Message, DialogItem } from '../../components';

import './Home.scss';

export default function Home() {
  return (
    <section className='home'>
      <div className='dialogs'>
        <DialogItem
          user={{
            isOnline: true,
            fullname: 'Фёдор Достоевский',
            avatar:
              'https://sun1-88.userapi.com/impf/c855228/v855228769/ccaf6/f9qsAhPcKoQ.jpg?size=50x0&quality=96&crop=5,115,1067,1067&sign=1e046f8cf2b90ba630d1c1cbc0ce8750&ava=1',
          }}
          message={{
            text:
              'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
            created_at: new Date(),
          }}
          unreaded={1}
        />
        <DialogItem
          user={{
            isOnline: true,
            fullname: 'Фёдор Достоевский',
            avatar:
              'https://sun1-88.userapi.com/impf/c855228/v855228769/ccaf6/f9qsAhPcKoQ.jpg?size=50x0&quality=96&crop=5,115,1067,1067&sign=1e046f8cf2b90ba630d1c1cbc0ce8750&ava=1',
          }}
          message={{
            text:
              'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
            created_at: new Date(),
          }}
          unreaded={0}
        />
        <DialogItem
          user={{
            isOnline: true,
            fullname: 'Фёдор Достоевский',
            avatar:
              'https://sun1-88.userapi.com/impf/c855228/v855228769/ccaf6/f9qsAhPcKoQ.jpg?size=50x0&quality=96&crop=5,115,1067,1067&sign=1e046f8cf2b90ba630d1c1cbc0ce8750&ava=1',
          }}
          message={{
            text:
              'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
            isReaded: false,
            isMe: true,
            created_at: new Date(),
          }}
        />
        <DialogItem
          user={{
            isOnline: false,
            fullname: 'Фёдор Достоевский',
            avatar:
              'https://sun1-88.userapi.com/impf/c855228/v855228769/ccaf6/f9qsAhPcKoQ.jpg?size=50x0&quality=96&crop=5,115,1067,1067&sign=1e046f8cf2b90ba630d1c1cbc0ce8750&ava=1',
          }}
          message={{
            text:
              'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
            created_at: new Date(),
          }}
          unreaded={99}
        />
        <DialogItem
          user={{
            isOnline: true,
            fullname: 'Фёдор Достоевский',
            avatar:
              'https://sun1-88.userapi.com/impf/c855228/v855228769/ccaf6/f9qsAhPcKoQ.jpg?size=50x0&quality=96&crop=5,115,1067,1067&sign=1e046f8cf2b90ba630d1c1cbc0ce8750&ava=1',
          }}
          message={{
            text:
              'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
            isReaded: true,
            isMe: true,
            created_at: new Date(),
          }}
          unreaded={1}
        />
      </div>
      <div className='messages'>
        <Message
          avatar='https://sun1-88.userapi.com/impf/c855228/v855228769/ccaf6/f9qsAhPcKoQ.jpg?size=50x0&quality=96&crop=5,115,1067,1067&sign=1e046f8cf2b90ba630d1c1cbc0ce8750&ava=1'
          text='Алёна, ты жопенька'
          date={new Date()}
          isMe={true}
          attachements={[
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
            },
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=2&nature,water',
            },
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=3&nature,water',
            },
          ]}
        />
        <Message
          avatar='https://sun1-96.userapi.com/impf/c840439/v840439215/82711/OCPmLKZBZXA.jpg?size=50x0&quality=96&crop=295,296,486,486&sign=cf74ac48c5b176c07fbb82741a2c9815&ava=1'
          text='Я знаю'
          date={new Date()}
          isMe={false}
          isReaded={true}
          attachements={[
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=4&nature,water',
            },
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=5&nature,water',
            },
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=6&nature,water',
            },
          ]}
        />
        <Message
          avatar='https://sun1-88.userapi.com/impf/c855228/v855228769/ccaf6/f9qsAhPcKoQ.jpg?size=50x0&quality=96&crop=5,115,1067,1067&sign=1e046f8cf2b90ba630d1c1cbc0ce8750&ava=1'
          date={new Date()}
          isMe={true}
          attachements={[
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=4&nature,water',
            },
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=5&nature,water',
            },
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=6&nature,water',
            },
          ]}
        />
        <Message
          avatar='https://sun1-88.userapi.com/impf/c855228/v855228769/ccaf6/f9qsAhPcKoQ.jpg?size=50x0&quality=96&crop=5,115,1067,1067&sign=1e046f8cf2b90ba630d1c1cbc0ce8750&ava=1'
          date={new Date()}
          isMe={true}
          attachements={[
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/170x170/?random=6&nature,water',
            },
          ]}
        />
        <Message
          avatar='https://sun1-96.userapi.com/impf/c840439/v840439215/82711/OCPmLKZBZXA.jpg?size=50x0&quality=96&crop=295,296,486,486&sign=cf74ac48c5b176c07fbb82741a2c9815&ava=1'
          isTyping
        />
        <Message
          avatar='https://sun1-88.userapi.com/impf/c855228/v855228769/ccaf6/f9qsAhPcKoQ.jpg?size=50x0&quality=96&crop=5,115,1067,1067&sign=1e046f8cf2b90ba630d1c1cbc0ce8750&ava=1'
          isMe={true}
          isTyping
        />
      </div>
    </section>
  );
}
