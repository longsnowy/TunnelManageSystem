package tk.snow.tunnel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tk.snow.tunnel.entity.Fixture;
import tk.snow.tunnel.service.FixtureService;
import tk.snow.tunnel.utils.ApiResponse;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * (Fixture)表控制层
 *
 * @author makejava
 * @since 2022-03-24 16:39:57
 */
@RestController
@RequestMapping("fixture")
public class FixtureController {

    @Autowired
    private FixtureService fixtureService;


    @ResponseBody
    @RequestMapping("/list/{routeId}")
    public Map<String,Object> list(@PathVariable("routeId") Integer routeId) {

        Map<String, Object> map = new HashMap<String, Object>();
        List<Fixture> list = fixtureService.getList(routeId);
        map.put("items", list);
        map.put("totals", list.size());
        return ApiResponse.toJson(20000, map);
    }



    @ResponseBody
    @RequestMapping("/add")
    public Map<String,Object> add(@RequestBody Fixture fixture) {

        int a = fixtureService.add(fixture);
        if (a > 0) {
            return ApiResponse.toJsonSuccess(20000, "添加成功");
        } else {
            return ApiResponse.toJsonDefault(62560, "添加失败");
        }

    }


    @ResponseBody
    @RequestMapping("/update")
    public Map<String,Object> update(@RequestBody Fixture fixture) {

        int a = fixtureService.update(fixture);
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
        int a = fixtureService.deleteById(id);
        if (a > 0) {
            return ApiResponse.toJsonSuccess(20000, "删除成功");
        } else {
            return ApiResponse.toJsonDefault(62560, "删除失败");
        }
    }


}

