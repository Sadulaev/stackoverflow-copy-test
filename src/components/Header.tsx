import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/stack-overflow-logo.png'
import { useAppDispatch } from '../hooks';
import { changeSearchText } from '../redux/features/applicationSlice';
import { Flex, PrimaryButton, SecondaryButton } from '../styles/components';
import { baseTheme } from '../styles/theme';

const Header = (): JSX.Element => {
    const dispatch = useAppDispatch();
    
    const [searchText, setSearchText] = useState('')

    const handleChangeSearch = () => {
        dispatch(changeSearchText(searchText))
    }

    return (
        <StyledHeader>
            <Navigation>
                <Logo>
                    <img src={logo} alt="Логотип" />
                </Logo>
                <NavList>
                    <Flex alignItems='center'>
                        <li><a href="">About</a></li>
                        <li><a href="">Products</a></li>
                        <li><a href="">For Teams</a></li>
                    </Flex>
                </NavList>
                <SearchBar>
                    <Flex justifyContent='space-between' alignItems='center'>
                        <input type="text" placeholder='Search...' value={searchText} onChange={(e) => setSearchText(e.target.value) }/>
                        <NavLink to='questions/search'><PrimaryButton width='50' height='25' onClick={() => handleChangeSearch()}>Поиск</PrimaryButton></NavLink>
                    </Flex>
                </SearchBar>
                <Flex>
                    <SecondaryButton width='60' height='33'>Log in</SecondaryButton>
                    <PrimaryButton width='66' height='33'>Sign up</PrimaryButton>
                </Flex>
            </Navigation>
        </StyledHeader>
    );
};

const StyledHeader = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 1px solid ${baseTheme.colors.border};
`

const Navigation = styled.div`
    max-width: ${baseTheme.media.max};
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.div`
    margin-top: -4px;
    padding: 5px;
    width: 150px;
    height: 30px;
    img {
        width: 100%;
    }
`

const NavList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
        padding: 6px 12px;
        font-size: 15px;
    }
    a {
        text-decoration: none;
        color: ${baseTheme.colors.font};
    }
    li: hover {
        background: ${baseTheme.colors.border};
        border-radius: 15px;

    }
`

const SearchBar = styled.div`
    margin: 0 8px;
    width: 630px;
    height: 33px;
    border: 1px solid ${baseTheme.colors.border};
    border-radius: 3px;
    input {
        width: 100%;
        padding: 8px 9px;
        border: none;
    }
    input:focus-visible {
        outline: none
    }
    button {
        padding 5px;
        
    }
`

export default Header;