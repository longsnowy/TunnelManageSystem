package tk.snow.tunnel.mapper;


import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
import tk.snow.tunnel.entity.Department;

@Mapper
@Repository

public interface DepartmentMapper extends BaseMapper<Department> {



    //查询表字典
    @Delete("delete from department where id = '${id}'")
    Integer deleteById(@Param("id") Integer id);



}
