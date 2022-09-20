package tk.snow.tunnel.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.snow.tunnel.entity.Fixture;
import tk.snow.tunnel.mapper.FixtureMapper;

import java.util.List;

@Service
public class FixtureService {
    @Autowired
    private FixtureMapper fixtureMapper;


    public List<Fixture> getList(int routeId) {
        return fixtureMapper.getByRoute(routeId);
    }

    //根据id删除
    public int deleteById(Integer id) {
        return fixtureMapper.deleteById(id);
    }

    public int add(Fixture fixture){
        return fixtureMapper.insert(fixture);
    }

    public int update(Fixture fixture){
        return fixtureMapper.updateById(fixture);
    }

}
