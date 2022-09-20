package tk.snow.tunnel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tk.snow.tunnel.entity.Discern;
import tk.snow.tunnel.service.DiscernService;
import tk.snow.tunnel.utils.ApiResponse;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * (Discern)表控制层
 *
 * @author makejava
 * @since 2022-03-24 16:39:57
 */
@RestController
@RequestMapping("discern")
public class DiscernController {

    @Autowired
    private DiscernService discernService;


    @ResponseBody
    @RequestMapping("/list/{num}/{size}")
    public Map<String,Object> list(@PathVariable("num") Integer num, @PathVariable("size") Integer size) {
        Map<String, Object> map = new HashMap<String, Object>();
        List<Discern> list = discernService.getList( num, size);
        map.put("items", list);
        map.put("totals", list.size());
        return ApiResponse.toJson(20000, map);
    }



    @ResponseBody
    @RequestMapping("/add")
    public Map<String,Object> add(@RequestBody Discern discern) {

        int a = discernService.add(discern);
        if (a > 0) {
            return ApiResponse.toJsonSuccess(20000, "添加成功");
        } else {
            return ApiResponse.toJsonDefault(62560, "添加失败");
        }

    }


    @ResponseBody
    @RequestMapping("/update")
    public Map<String,Object> update(@RequestBody Discern discern) {

        int a = discernService.update(discern);
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
        int a = discernService.deleteById(id);
        if (a > 0) {
            return ApiResponse.toJsonSuccess(20000, "删除成功");
        } else {
            return ApiResponse.toJsonDefault(62560, "删除失败");
        }
    }


}

