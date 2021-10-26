import {Router} from 'express';

const router = Router();

router.get('/', (req,res) => {
    res.render('./pages/index');
});

router.get('/sobre', (req,res) => {
    res.render('./pages/sobre');
});

router.get('/contato', (req,res) => {
    res.render('./pages/contato');
});

export default router;