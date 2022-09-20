package tk.snow.tunnel.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @TableId(type = IdType.AUTO)
    private int id;
    @TableField(value = "username")
    private String username;
    @TableField(value = "password")
    private String password;
    @TableField(value = "statusId")
    private int statusId;
    @TableField(value = "departmentId")
    private int departmentId;
    @TableField(value = "name")
    private String name;
    @TableField(value = "age")
    private int age;
    @TableField(value = "idCard")
    private String idCard;
    @TableField(value = "gender")
    private String gender;
    @TableField(value = "phone")
    private String phone;
}

