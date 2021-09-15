import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keyword" content={keyword} />
            </Helmet>
        </>
    )
}

Meta.defaultProps = {
    title: 'KDEVMOBILE',
    description: 'Chúng tôi bán những sản phẩm tốt với giá rẻ',
    keyword: 'Điện thoại, Mua điện thoại, Điện thoại giá rẻ'
}

export default Meta
