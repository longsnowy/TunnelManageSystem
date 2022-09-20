package tk.snow.tunnel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tk.snow.tunnel.entity.Identity;
import tk.snow.tunnel.service.IdentityService;
import tk.snow.tunnel.utils.ApiResponse;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * (Identity)表控制层
 *
 * @author makejava
 * @since 2022-03-24 16:39:57
 */
@RestController
@RequestMapping("identity")
public class IdentityController {

    @Autowired
    private IdentityService identityService;


    @ResponseBody
    @RequestMapping("/list/{num}/{size}")
    public Map<String,Object> list(@PathVariable("num") Integer num, @PathVariable("size") Integer size) {

        Map<String, Object> map = new HashMap<String, Object>();
        List<Identity> list = identityService.getList( num, size);
        map.put("items", list);
        map.put("totals", list.size());
        return ApiResponse.toJson(20000, map);


    }



    @ResponseBody
    @RequestMapping("/add")
    public Map<String,Object> add(@RequestBody Identity identity) {

        int a = identityService.add(identity);
        if (a > 0) {
            return ApiResponse.toJsonSuccess(20000, "添加成功");
        } else {
            return ApiResponse.toJsonDefault(62560, "添加失败");
        }

    }


    @ResponseBody
    @RequestMapping("/update")
    public Map<String,Object> update(@RequestBody Identity identity) {

        int a = identityService.update(identity);
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
        int a = identityService.deleteById(id);
        if (a > 0) {
            return ApiResponse.toJsonSuccess(20000, "删除成功");
        } else {
            return ApiResponse.toJsonDefault(62560, "删除失败");
        }
    }


}

