const isLogin = (req, res, next) => {
    const isLogin = true;
    if (isLogin)
        next();
    //next middleware'in bir sonraki aşamada bulunan işlemi yapmasını sağlar
    else
        res.send('Lütfen Giriş Yapın');
};

module.exports = isLogin;