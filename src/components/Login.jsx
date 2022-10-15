import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const User = {
    id: '60201917',
    pw: '1234'
}


export default function Login() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const navigate = useNavigate();

    const handleId = (e) => {
        setId(e.target.value);
    }

    const handlePw = (e) => {
        setPw(e.target.value)
    }

    const onClickConfirmButton = () => {
        if(id === User.id && pw === User.pw) {
            alert('로그인에 성공했습니다.');
            goToMain()
        } else {
            alert('등록되지 않은 회원입니다.');
        }
    }

    const goToMain = () => {
        navigate('/');
      };

    const goToSignUp = () => {
        navigate('/sign-up');
    }

    return (
        <div className='page'>
            <h1 className='titleWrap'>
                명지톡톡
            </h1>
            <div className='contentWrap'>
                <div className='inputTitle'>아이디</div>
                <div className='inputWrap'>
                    <input
                    type='text'
                    className='input'
                    value={id}
                    onChange={handleId} />
                </div>
                <div className='errorMessageWrap'>
                    올바른 아이디를 입력해주세요.
                </div>
                <div className='inputTitle'>비밀번호</div>
                <div className='inputWrap'>
                    <input 
                    type='password'
                    className='input' 
                    value={pw}
                    onChange={handlePw} />
                </div>
                <div className='errorMessageWrap'>
                    비밀번호가 틀립니다.
                </div>
            </div>
            <div>
                <button onClick={onClickConfirmButton}>
                    로그인
                </button>
                <button onClick={goToSignUp}>
                    회원가입
                </button>
            </div>
        </div>
    )
}