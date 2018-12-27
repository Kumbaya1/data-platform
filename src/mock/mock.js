const Mock = require('mockjs');
const Random = Mock.Random;
Mock.mock(/getcollectionlist/, {
    'list|20-30': [{
        'id|+1': 1,
        'title':Random.ctitle(5,10),
        'content':Random.csentence(20,30),
        'total':Random.natural( 0, 10000 )
    }]
})