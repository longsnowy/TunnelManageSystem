package tk.snow.tunnel.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tk.snow.tunnel.entity.User;
import tk.snow.tunnel.mapper.UserMapper;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.*;

@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;

    public User login(String username){
        return userMapper.login(username);
    }

    public List<User> getUserListByName(String name) {
        return userMapper.getUserListByName(name);
    }

    //根据条件查询用户
    public List<User> query(User user, int num, int size) {
        QueryWrapper<User> queryWrapper = new QueryWrapper<>(user);
        PageHelper.startPage(num, size);
        PageInfo<User> pageInfo = new PageInfo<>(userMapper.selectList(queryWrapper));
        return pageInfo.getList();
    }

    public List<User> getList(int num, int size) {

        PageHelper.startPage(num, size);
        PageInfo<User> pageInfo = new PageInfo<>(userMapper.selectList(null));
        return pageInfo.getList();
    }

    //根据id删除用户
    public int deleteById(Integer id) {
        return userMapper.deleteById(id);
    }

    public int add(User user){
        return userMapper.insert(user);
    }

    public int update(User user){
        return userMapper.updateById(user);
    }

}
