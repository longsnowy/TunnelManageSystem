package tk.snow.tunnel.mapper;


import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
import tk.snow.tunnel.entity.Task;

@Mapper
@Repository

public interface TaskMapper extends BaseMapper<Task> {


    //查询表字典
    @Select("select * from task where id = '${id}'")
    Task getById(@Param("id") Integer id);

    //查询表字典
    @Delete("delete from task where id = '${id}'")
    Integer deleteById(@Param("id") Integer id);



}
