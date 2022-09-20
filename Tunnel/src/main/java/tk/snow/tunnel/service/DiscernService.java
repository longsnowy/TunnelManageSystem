package tk.snow.tunnel.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.snow.tunnel.entity.Discern;
import tk.snow.tunnel.mapper.DiscernMapper;

import java.util.List;

@Service
public class DiscernService {
    @Autowired
    private DiscernMapper discernMapper;


    public List<Discern> getList(int num, int size) {
        PageHelper.startPage(num, size);
        PageInfo<Discern> pageInfo = new PageInfo<>(discernMapper.selectList(null));
        return pageInfo.getList();
    }

    //根据id删除
    public int deleteById(Integer id) {
        return discernMapper.deleteById(id);
    }

    public int add(Discern discern){
        return discernMapper.insert(discern);
    }

    public int update(Discern discern){
        return discernMapper.updateById(discern);
    }

}
