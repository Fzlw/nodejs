exports.SQL = [
    {
        name: "",
        sql: `
            CREATE TABLE 'sysperson' (
                'Id' varchar(36) CHARACTER SET utf8 NOT NULL COMMENT '主键',
                'Name' varchar(50) CHARACTER SET utf8 NOT NULL COMMENT '用户姓名',
                PRIMARY KEY ('Id')
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户';
            `
    }
]