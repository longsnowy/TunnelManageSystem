package tk.snow.tunnel.mapper;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;
import tk.snow.tunnel.entity.User;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Mapper
@Repository

public interface UserMapper extends BaseMapper<User> {

    @Select("select * from user where username = '${username}'")
    User login(@Param("username") String username);

    @Delete("delete from user where id = '${id}'")
    Integer deleteById(@Param("id") Integer id);

    @Select("select * from user where name like '%${name}%' ")
    List<User> getUserListByName(@Param("name") String name);




}
