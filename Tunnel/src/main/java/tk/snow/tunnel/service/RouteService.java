package tk.snow.tunnel.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.snow.tunnel.entity.Route;
import tk.snow.tunnel.mapper.RouteMapper;

import java.util.List;

@Service
public class RouteService {
    @Autowired
    private RouteMapper routeMapper;


    public List<Route> getList(int num, int size) {
        PageHelper.startPage(num, size);
        PageInfo<Route> pageInfo = new PageInfo<>(routeMapper.selectList(null));
        return pageInfo.getList();
    }

    //根据id删除
    public int deleteById(Integer id) {
        return routeMapper.deleteById(id);
    }

    public int add(Route route){
        return routeMapper.insert(route);
    }

    public int update(Route route){
        return routeMapper.updateById(route);
    }

}
