
import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import DefaultImage from "../constant/Logo.png"

// My Api Query
import { useGetCryptosQuery } from '../Api/CryptoApi';
import { useGetCryptoNewsQuery } from '../Api/CryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 20 : 100 });

  if (!cryptoNews?.value) return <h2>Loading</h2>;


  return (
    //{/* Only display this input on News component as long as simplified is false */}
    <Row className=''>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {data?.data?.coins?.map((currency, i) => <Option value={currency.name} key= {i}>{currency.name}</Option>)}
          </Select>
        </Col>
      )}

     <div className='relative w-full block effect py-4'>
       <Row className='justify-evenly items-center'>
        {
          cryptoNews.value.map((news, i) =>{
               return ( <Col  xs = {24} sm={18} lg = {6} xl = {5}  key={i} className = "m-1 effectHover2">
                <Card className= "hover:transition-all rounded-3xl"hoverable>
                 <a href={news.url} target ="_blank" rel = "noreferrer">
                  <div className='news-image-container'>
                    <Title className='news-title' level={5}>{news.name}</Title>
                    <div className='w-full m-1 blcok'>
                    <img src={news?.image?.thumbnail?.contentUrl || DefaultImage} alt="" className='block relative max-w-full h-auto'/>
                    </div>
                  </div>

                <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                 <div className="provider-container flex justify-between items-center">
                  <div className = "flex justify-between items-center">
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || DefaultImage} alt={news.name} />
                  <Text className="provider-name">{news.provider[0]?.name}</Text>
                 </div>
                 <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                </div>
                 </a>
              </Card>
            </Col>
            )
          })
        }
        </Row>
    </div>
    </Row>
  );
};

export default News;
