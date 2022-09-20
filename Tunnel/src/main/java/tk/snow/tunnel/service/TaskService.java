package tk.snow.tunnel.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.snow.tunnel.entity.Task;
import tk.snow.tunnel.mapper.TaskMapper;

import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskMapper taskMapper;


    public List<Task> getList(int num, int size) {
        PageHelper.startPage(num, size);
        PageInfo<Task> pageInfo = new PageInfo<>(taskMapper.selectList(null));
        return pageInfo.getList();
    }

    public Task getById(int id) {
        return taskMapper.getById(id);
    }

    //根据id删除
    public int deleteById(Integer id) {
        return taskMapper.deleteById(id);
    }

    public int add(Task task){
        return taskMapper.insert(task);
    }

    public int update(Task task){
        return taskMapper.updateById(task);
    }

}
