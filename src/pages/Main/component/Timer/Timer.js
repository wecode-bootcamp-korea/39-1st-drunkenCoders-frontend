import React, { useState, useEffect } from 'react';

const Timer = () => {
  const setDate = new Date('2022-12-01T00:00:00+0900');
  const now = new Date();

  const dis = setDate.getTime() - now.getTime();
  const min1 = 1000 * 60;

  const h = Math.floor(dis / (min1 * 60 * 24));
  const m = Math.floor((dis % (min1 * 60 * 24)) / (min1 * 60));
  const d = Math.floor((dis % (min1 * 60)) / min1);
  const s = Math.floor((dis % min1) / 1000);

  const [day, setDay] = useState(h);
  const [hour, setHour] = useState(m);
  const [minute, setMinute] = useState(d);
  const [second, setSecond] = useState(s);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(second) > 0) setSecond(parseInt(second) - 1);
      if (parseInt(second) === 0) {
        if (parseInt(minute) === 0) {
          if (parseInt(hour) === 0) {
            if (parseInt(day) === 0) {
              clearInterval(countdown);
            } else {
              setDay(parseInt(day) - 1);
              setHour(23);
              setMinute(59);
              setSecond(59);
            }
          } else {
            setHour(parseInt(hour) - 1);
            setMinute(59);
            setSecond(59);
          }
        } else {
          setMinute(parseInt(minute) - 1);
          setSecond(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [day, hour, minute, second]);

  return (
    <div className="time">
      <span>
        {day}일 {hour}시간 {minute}분 {second}초
      </span>
      <span className="sub-txt">남았어요</span>
    </div>
  );
};

export default Timer;
