import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const BitCoinCard = () => {
  const theme = useTheme();
  return (
    <Box>
      <Card
        sx={{
          background:
            "linear-gradient(87deg, rgb(245, 54, 92), rgb(245, 96, 54)) !important",
        }}
      >
        <CardContent sx={{ padding: "1.4em 2em" }}>
          <Grid container>
            <Grid item xs={6}>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAeCAYAAABqpJ3BAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABUBJREFUWIXtll1MU2cYx3/v4bOFuGJFQM6K6BzF+hm4GItRA4kMLyQxmiUSl3jRC5ELpxIvnEvYhYlLlqBRs6saZBcYd+HMgNu5RZwZ0RQlpYU5tKWlKS2wtceh7Xl3UT2M+bFNlzCM/6uT8z7Pe/6/93mfJ0domlam6/pXwPuKoij8z6XrulQUZUxK2Wk2mz8V8Xj8B0VRNs23sZeRlPKEiMfjqYVw8s+Srut+ZaGafyx1IZtHURSxoAEA3gDMt15jgNQM4lH8hcmpVOq/9vOv9TRAxI3oaUJ0rIULGxAXt8AdF8hZsyMjIzQ3N3Pp0qU5qaFQiJaWFlwu1ysbu3LlCk6nk+Hh4X8OIPzfIb79EEI3QCjIggqYmUTcOIG42gpIAG7fvk00GsVut8/ZzO/3E4lEkFLS09NDa2srwWDwpQAGBgZIJBJkZma+MG529ZEGV1tBTyILKhDVhyDTBN6LcLcbfr4CZdug/AOGhoYQQpCfn084HKaoqAiAdevWcfLkSVRV5ejRo8RiMfLz89E0DbPZDEA4HCYajVJUVITVakVKydjYGIlEgrKyMnJzcwHYv38/Dx8+pKSkhOnpaSKRCDk5OaiqihDiGQCB72FmMl2JSS+yYBX0tSHfO46IDsL0KAx/jV62DZ/Ph5SSY8eOAbBr1y52797NqVOnuHnzJu3t7QQCAQCcTiebNm1i3759nD59GrfbDYDJZKK9vZ1z584Z7ywWC21tbWRlZdHc3ExNTQ0Wi4Xe3l7DpsPh4Pjx4wbELMD03dm65JVAVh6ivB6pKPD7VBrsNz9+vx9N01i7di0NDQ24XC4uX75MY2MjXq8XVVUJhUIAbN68GYfDQXl5OWfOnMHtdtPY2IjD4UBKSUdHB263m6amJlKpFF1dXfT09BhXs7Kyku7ubhYtWsSBAwfo6upicHCQYDBIaWkp8KceELkF6YeMHGTVx+C/CjdOgKkQlMecOW8xNDQEQG1tLVVVVaxatYpkMonX6yWRSGC3242Y+vp6tm7dSm5uLrdu3WLjxo3s2bOH9evXs3z5cvr6+qiqqmLHjh3U1dUBMDU1ZeQXFxcTDodZvXo1GzZsMK7qk2s2B0Cqm0FkpKdNZAAK3kE2XECMfAMPJtIxb9cam9vtdnRdZ3R0FLPZzPj4uPHe6/WSnZ1NeXk5gNHIqqoaHx4bGwNgxYoVAEbViouL8Xg8mEwm4vG4UQlITz+LxcLixYufBiC/FNY5QU8ifulF/PQ59HwE1z5Jr1tWICv34vF4sFgspFIpXC4XoVCI7du34/P5DIBIJEJmZibBYJDR0VEsFguQniyBQACPx0NeXh4APp+P+/fv09nZiRCC6upq/H6/cRBP9pyYmGBiYoLKysrnNDEgqw4hlCwY+BKCP2KELatBbvmC6K8PmJxMN3pLSwsAdXV17Ny5k4MHD2K1WlmyZAl2u51r165x5MgRrFYrZ8+epbq6mv7+fg4fPgzA+fPnWbNmDW63G7fbTUZGBk6nE03TkFIae5jNZmw2G9evX59TjScSmqZJ/qqZSRjvh+QDxGI7suDdNODjkXfv3j10XWflypUsW7YMKSUjIyOYTCZUVSWZTHLnzh00TcNms6GqKlJKBgcHicViLF26lIqKCnRdN+Z9RUUFhYWFTE1NEYlEKCkpYXx8nOzsbGw2G9FolFgsRmlpqTGSnw+wgPQa/8wtEL0BmG8tfABd1xfsFNJ1XVcURRmbbyOvoIAipeycbxcvKyFEh5BSZmqa1ial3AuoiqKIv82cR+m6rgMBIUSH2Wz+7A/zHDgmOfiReQAAAABJRU5ErkJggg==" />
            </Grid>
            <Grid item xs={6} textAlign={"right"}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  background: "rgb(176, 238, 211)",
                  color: "rgb(26, 174, 111)",
                  fontSize: "0.7rem",
                }}
              >
                Success
              </Button>
            </Grid>
          </Grid>
          <Grid margin={"24px 0"}>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "0.625rem",
                lineHeight: 1.5,
                color: "rgb(206, 212, 218)",
                letterSpacing: "2px",
              }}
            >
              Username
            </Typography>
            <Typography
              sx={{
                margin: "0px 0px 0.5rem",
                fontWeight: 600,
                fontSize: "1.625rem",
                lineHeight: 1.5,
                color: "rgb(255, 255, 255)",
              }}
            >
              @johnsnow
            </Typography>
          </Grid>
          <Grid margin={"20px 0 0 0"}>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "0.625rem",
                lineHeight: 1.5,
                color: "rgb(206, 212, 218)",
                letterSpacing: "2px",
              }}
            >
              Name
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "1.0625rem",
                lineHeight: 1.5,
                color: "rgb(255, 255, 255)",
              }}
            >
              @johnsnow
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BitCoinCard;
