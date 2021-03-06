import express from 'express';
import data from '../src/testData.json';

const router = express.Router();

router.get('/contests', (req, res)=>{
  res.send({
    contests: data.contests.reduce((obj, contest)=>{
      obj[contest.id] = contest;
      return obj;
    }, {})
  });
});

export default router;
