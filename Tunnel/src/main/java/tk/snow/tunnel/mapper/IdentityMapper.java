package tk.snow.tunnel.mapper;


import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import tk.snow.tunnel.entity.Department;
import tk.snow.tunnel.entity.Identity;

@Mapper
@Repository

public interface IdentityMapper extends BaseMapper<Identity> {



    //查询表字典
    @Delete("delete from identity where id = '${id}'")
    Integer deleteById(@Param("id") Integer id);



}
