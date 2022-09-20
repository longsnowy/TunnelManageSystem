package tk.snow.tunnel.controller;

import org.apache.ibatis.jdbc.Null;
import org.springframework.beans.factory.annotation.Autowired;
import tk.snow.tunnel.entity.Department;
import tk.snow.tunnel.entity.User;

import org.springframework.web.bind.annotation.*;
import tk.snow.tunnel.service.UserService;
import tk.snow.tunnel.utils.ApiResponse;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static tk.snow.tunnel.utils.CheckNullUtils.checkNull;

/**
 * (User)表控制层
 *
 * @author makejava
 * @since 2022-03-24 16:39:57
 */
@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserService userService;

    @ResponseBody
    @RequestMapping("/login")
    public Map<String,Object> query(@RequestBody User user) {

        System.out.println(user.getUsername());
        User userTrue = userService.login(user.getUsername());

        if (userTrue != null && userTrue.getPassword().equals(user.getPassword())){
            Map<String,Object> map = new HashMap<String,Object>();
            map.put("user",userTrue);
            return ApiResponse.toJson(20000, map);
        }else {
            return ApiResponse.toJsonDefault(60204, "登录失败!");
        }


    }

    @ResponseBody
    @RequestMapping("/getByName")
    public Map<String,Object> getUserListByName(@RequestBody User user) {

        System.out.println(user);

        Map<String, Object> map = new HashMap<>();

        List<User> list = userService.getUserListByName(user.getName());
        map.put("items", list);
        map.put("totals", list.size());


        return ApiResponse.toJson(20000, map);


    }

    @RequestMapping("/loginout")
    @ResponseBody
    public Map<String, Object> out() {
        return ApiResponse.toJsonSuccess(20000, "退出成功");
    }

    @RequestMapping("/info")
    @ResponseBody
    public Map<String,Object> info(String username) {
        Map<String,Object> map = new HashMap<>();
        map.put("name","admin");
        String[] roles = {"admin"};
        map.put("roles",roles);
        map.put("introduction","admin");
        map.put("avatar","https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif");
        return ApiResponse.toJson(20000,map);
    }

    @ResponseBody
    @RequestMapping("/list/{num}/{size}")
    public Map<String,Object> list(@PathVariable("num") Integer num, @PathVariable("size") Integer size) {

        Map<String, Object> map = new HashMap<String, Object>();
        List<User> list = userService.getList( num, size);
        map.put("items", list);
        map.put("totals", list.size());
        return ApiResponse.toJson(20000, map);


    }

    @ResponseBody
    @RequestMapping("/query/{num}/{size}")
    public Map<String,Object> query(@RequestBody User user,@PathVariable("num") Integer num, @PathVariable("size") Integer size) {

        user.setUsername(checkNull(user.getUsername()));
        user.setName(checkNull(user.getName()));

        Map<String, Object> map = new HashMap<String, Object>();
        List<User> list = userService.query(user, num, size);
        map.put("items", list);
        map.put("totals", list.size());
        return ApiResponse.toJson(20000, map);


    }

    @ResponseBody
    @RequestMapping("/add")
    public Map<String,Object> add(@RequestBody User user) {

        System.out.println(user.toString());
        user.setUsername(checkNull(user.getUsername()));
        user.setName(checkNull(user.getName()));

        int a = userService.add(user);
        if (a > 0) {
            return ApiResponse.toJsonSuccess(20000, "添加成功");
        } else {
            return ApiResponse.toJsonDefault(62560, "添加失败");
        }

    }


    @ResponseBody
    @RequestMapping("/update")
    public Map<String,Object> update(@RequestBody User user) {

        System.out.println(user.toString());
        user.setUsername(checkNull(user.getUsername()));
        user.setName(checkNull(user.getName()));

        int a = userService.update(user);
        if (a > 0) {
            return ApiResponse.toJsonSuccess(20000, "修改成功");
        } else {
            return ApiResponse.toJsonDefault(62560, "修改失败");
        }

    }

    //删除用户
    @RequestMapping("/delete/{id}")
    @ResponseBody
    public Map<String, Object> delete(@PathVariable("id") Integer id) {
        int a = userService.deleteById(id);
        if (a > 0) {
            return ApiResponse.toJsonSuccess(20000, "删除成功");
        } else {
            return ApiResponse.toJsonDefault(62560, "删除失败");
        }
    }


}

