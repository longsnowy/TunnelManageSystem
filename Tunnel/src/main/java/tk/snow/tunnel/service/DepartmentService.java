package tk.snow.tunnel.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.snow.tunnel.entity.Department;
import tk.snow.tunnel.mapper.DepartmentMapper;

import java.util.List;

@Service
public class DepartmentService {
    @Autowired
    private DepartmentMapper departmentMapper;


    public List<Department> getList(int num, int size) {
        PageHelper.startPage(num, size);
        PageInfo<Department> pageInfo = new PageInfo<>(departmentMapper.selectList(null));
        return pageInfo.getList();
    }

    public Department getById(int id) {
        return departmentMapper.selectById(id);
    }

    //根据id删除
    public int deleteById(Integer id) {
        return departmentMapper.deleteById(id);
    }

    public int add(Department department){
        return departmentMapper.insert(department);
    }

    public int update(Department department){
        return departmentMapper.updateById(department);
    }

}
