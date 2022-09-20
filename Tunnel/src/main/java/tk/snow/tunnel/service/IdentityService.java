package tk.snow.tunnel.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.snow.tunnel.entity.Identity;
import tk.snow.tunnel.mapper.IdentityMapper;

import java.util.List;

@Service
public class IdentityService {
    @Autowired
    private IdentityMapper identityMapper;


    public List<Identity> getList(int num, int size) {
        PageHelper.startPage(num, size);
        PageInfo<Identity> pageInfo = new PageInfo<>(identityMapper.selectList(null));
        return pageInfo.getList();
    }

    //根据id删除
    public int deleteById(Integer id) {
        return identityMapper.deleteById(id);
    }

    public int add(Identity identity){
        return identityMapper.insert(identity);
    }

    public int update(Identity identity){
        return identityMapper.updateById(identity);
    }

}
