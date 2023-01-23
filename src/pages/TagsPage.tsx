import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchAllTags } from '../redux/features/queries';
import { Flex, Loader } from '../styles/components';
import { baseTheme } from '../styles/theme';

const TagsPage = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const tags = useAppSelector(state => state.appData.allTags)
    const status = useAppSelector(state => state.appData.status)

    useEffect(() => {
        dispatch(fetchAllTags())
    }, [])


    return (
        <Tags>
            {status === 'pending' ?
                <Flex justifyContent='center' alignItems='center'>
                    <Loader />
                </Flex>
                :
                ''
            }
            {status === 'fulfilled' ?
                <Flex wrap='wrap'>
                {tags.map(tag => {
                    return <Tag key={tag.name}><p>{tag.name}</p>  {tag.count}</Tag>
                })}
            </Flex>
                :
                ''
            }
        </Tags>
    );
};

const Tags = styled.div`
    width: 100%;
    padding: 5px;
`
const Tag = styled.div`
    margin: 5px;
    width: max-content;
    border-radius: 5px;
    padding: 3px;
    background: hsl(120,18%,70%);
    color: blue;
    display: flex;
    align-items: center;
    p{
        font-weight: 600;
        margin-right: 5px;
    }
    &:hover {
        background: hsl(120,18%,60%);
        cursor: pointer;
        transform: scale(1.1);
        transition: 0.2s;
    }
`

export default TagsPage;